import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { 
  Package, 
  Image, 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Home,
  Save,
  X
} from 'lucide-react';
import { Product } from '../types/Product';
import { Slide } from '../types/Slide';

const AdminDashboard = () => {
  const { 
    products, 
    slides, 
    addProduct, 
    updateProduct, 
    deleteProduct,
    addSlide,
    updateSlide,
    deleteSlide,
    logout 
  } = useAdmin();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'products' | 'slides'>('products');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingSlide, setEditingSlide] = useState<Slide | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showSlideForm, setShowSlideForm] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProductSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const precoOriginal = formData.get('precoOriginal') ? parseFloat(formData.get('precoOriginal') as string) : undefined;
    const desconto = formData.get('desconto') ? parseFloat(formData.get('desconto') as string) : undefined;
    const preco = parseFloat(formData.get('preco') as string);
    
    // Calcular preço com desconto se houver desconto
    const precoFinal = precoOriginal && desconto ? precoOriginal * (1 - desconto / 100) : preco;
    
    const productData = {
      nome: formData.get('nome') as string,
      preco: precoFinal,
      precoOriginal: precoOriginal,
      desconto: desconto,
      categoria: formData.get('categoria') as string,
      imagem: formData.get('imagem') as string,
      imagens: [
        formData.get('imagem') as string,
        formData.get('imagem2') as string,
        formData.get('imagem3') as string
      ].filter(Boolean),
      descricao: formData.get('descricao') as string,
      popular: formData.get('popular') === 'on'
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      setEditingProduct(null);
    } else {
      addProduct(productData);
    }
    
    setShowProductForm(false);
    e.currentTarget.reset();
  };

  const handleSlideSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const slideData = {
      image: formData.get('image') as string,
      title: formData.get('title') as string,
      subtitle: formData.get('subtitle') as string,
      description: formData.get('description') as string,
      cta: formData.get('cta') as string,
      active: formData.get('active') === 'on',
      order: parseInt(formData.get('order') as string)
    };

    if (editingSlide) {
      updateSlide(editingSlide.id, slideData);
      setEditingSlide(null);
    } else {
      addSlide(slideData);
    }
    
    setShowSlideForm(false);
    e.currentTarget.reset();
  };

  const categorias = [
    { value: 'ConjuntoLegging', label: 'Conjunto Legging' },
    { value: 'ConjuntoShort', label: 'Conjunto Short' },
    { value: 'ModaPraia', label: 'Moda Praia' },
    { value: 'Meias', label: 'Meias' }
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__header">
        <div className="admin-dashboard__header-content">
          <h1>Painel Administrativo - Rizaile</h1>
          <div className="admin-dashboard__header-actions">
            <button onClick={() => navigate('/')} className="btn btn--secondary">
              <Home size={20} />
              Ver Site
            </button>
            <button onClick={handleLogout} className="btn btn--danger">
              <LogOut size={20} />
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="admin-dashboard__container">
        <nav className="admin-dashboard__nav">
          <button 
            className={`admin-dashboard__nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <Package size={20} />
            Produtos
          </button>
          <button 
            className={`admin-dashboard__nav-item ${activeTab === 'slides' ? 'active' : ''}`}
            onClick={() => setActiveTab('slides')}
          >
            <Image size={20} />
            Slides do Banner
          </button>
        </nav>

        <main className="admin-dashboard__content">
          {activeTab === 'products' && (
            <div className="admin-section">
              <div className="admin-section__header">
                <h2>Gerenciar Produtos</h2>
                <button 
                  onClick={() => setShowProductForm(true)}
                  className="btn btn--primary"
                >
                  <Plus size={20} />
                  Adicionar Produto
                </button>
              </div>

              <div className="admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>Imagem</th>
                      <th>Nome</th>
                      <th>Categoria</th>
                      <th>Preço</th>
                      <th>Desconto</th>
                      <th>Popular</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id}>
                        <td>
                          <img src={product.imagem} alt={product.nome} className="admin-table__image" />
                        </td>
                        <td>{product.nome}</td>
                        <td>{categorias.find(c => c.value === product.categoria)?.label}</td>
                        <td>
                          {product.precoOriginal && product.desconto ? (
                            <div>
                              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9em' }}>
                                R$ {product.precoOriginal.toFixed(2)}
                              </span>
                              <br />
                              <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>
                                R$ {product.preco.toFixed(2)}
                              </span>
                            </div>
                          ) : (
                            `R$ ${product.preco.toFixed(2)}`
                          )}
                        </td>
                        <td>
                          {product.desconto ? `${product.desconto}%` : '-'}
                        </td>
                        <td>{product.popular ? '✅' : '❌'}</td>
                        <td>
                          <div className="admin-table__actions">
                            <button 
                              onClick={() => {
                                setEditingProduct(product);
                                setShowProductForm(true);
                              }}
                              className="btn btn--small btn--secondary"
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              onClick={() => deleteProduct(product.id)}
                              className="btn btn--small btn--danger"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'slides' && (
            <div className="admin-section">
              <div className="admin-section__header">
                <h2>Gerenciar Slides do Banner</h2>
                <button 
                  onClick={() => setShowSlideForm(true)}
                  className="btn btn--primary"
                >
                  <Plus size={20} />
                  Adicionar Slide
                </button>
              </div>

              <div className="admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>Imagem</th>
                      <th>Título</th>
                      <th>Subtítulo</th>
                      <th>Ordem</th>
                      <th>Ativo</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slides.sort((a, b) => a.order - b.order).map(slide => (
                      <tr key={slide.id}>
                        <td>
                          <img src={slide.image} alt={slide.title} className="admin-table__image" />
                        </td>
                        <td>{slide.title}</td>
                        <td>{slide.subtitle}</td>
                        <td>{slide.order}</td>
                        <td>{slide.active ? '✅' : '❌'}</td>
                        <td>
                          <div className="admin-table__actions">
                            <button 
                              onClick={() => {
                                setEditingSlide(slide);
                                setShowSlideForm(true);
                              }}
                              className="btn btn--small btn--secondary"
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              onClick={() => deleteSlide(slide.id)}
                              className="btn btn--small btn--danger"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Product Form Modal */}
      {showProductForm && (
        <div className="admin-modal">
          <div className="admin-modal__content">
            <div className="admin-modal__header">
              <h3>{editingProduct ? 'Editar Produto' : 'Adicionar Produto'}</h3>
              <button 
                onClick={() => {
                  setShowProductForm(false);
                  setEditingProduct(null);
                }}
                className="admin-modal__close"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleProductSubmit} className="admin-form">
              <div className="admin-form__group">
                <label>Nome do Produto</label>
                <input 
                  type="text" 
                  name="nome" 
                  defaultValue={editingProduct?.nome}
                  required 
                />
              </div>

              <div className="admin-form__row">
                <div className="admin-form__group">
                  <label>Preço Original</label>
                  <input 
                    type="number" 
                    name="precoOriginal" 
                    step="0.01"
                    defaultValue={editingProduct?.precoOriginal}
                    placeholder="Deixe vazio se não houver desconto"
                  />
                </div>

                <div className="admin-form__group">
                  <label>Desconto (%)</label>
                  <input 
                    type="number" 
                    name="desconto" 
                    min="0"
                    max="100"
                    step="1"
                    defaultValue={editingProduct?.desconto}
                    placeholder="Ex: 20 para 20% de desconto"
                  />
                </div>
              </div>

              <div className="admin-form__row">
                <div className="admin-form__group">
                  <label>Preço Final (sem desconto)</label>
                  <input 
                    type="number" 
                    name="preco" 
                    step="0.01"
                    defaultValue={editingProduct?.preco}
                    required 
                    placeholder="Preço quando não há desconto"
                  />
                </div>

                <div className="admin-form__group">
                  <label>Categoria</label>
                  <select name="categoria" defaultValue={editingProduct?.categoria} required>
                    <option value="">Selecione uma categoria</option>
                    {categorias.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="admin-form__group">
                <label>Imagem Principal (URL)</label>
                <input 
                  type="url" 
                  name="imagem" 
                  defaultValue={editingProduct?.imagem}
                  required 
                />
              </div>

              <div className="admin-form__row">
                <div className="admin-form__group">
                  <label>Imagem 2 (URL)</label>
                  <input 
                    type="url" 
                    name="imagem2" 
                    defaultValue={editingProduct?.imagens?.[1]}
                  />
                </div>

                <div className="admin-form__group">
                  <label>Imagem 3 (URL)</label>
                  <input 
                    type="url" 
                    name="imagem3" 
                    defaultValue={editingProduct?.imagens?.[2]}
                  />
                </div>
              </div>

              <div className="admin-form__group">
                <label>Descrição</label>
                <textarea 
                  name="descricao" 
                  rows={4}
                  defaultValue={editingProduct?.descricao}
                  required
                ></textarea>
              </div>

              <div className="admin-form__group">
                <label className="admin-form__checkbox">
                  <input 
                    type="checkbox" 
                    name="popular"
                    defaultChecked={editingProduct?.popular}
                  />
                  Produto Popular
                </label>
              </div>

              <div className="admin-form__actions">
                <button type="submit" className="btn btn--primary">
                  <Save size={20} />
                  {editingProduct ? 'Atualizar' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Slide Form Modal */}
      {showSlideForm && (
        <div className="admin-modal">
          <div className="admin-modal__content">
            <div className="admin-modal__header">
              <h3>{editingSlide ? 'Editar Slide' : 'Adicionar Slide'}</h3>
              <button 
                onClick={() => {
                  setShowSlideForm(false);
                  setEditingSlide(null);
                }}
                className="admin-modal__close"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSlideSubmit} className="admin-form">
              <div className="admin-form__group">
                <label>Imagem do Slide (URL)</label>
                <input 
                  type="url" 
                  name="image" 
                  defaultValue={editingSlide?.image}
                  required 
                />
              </div>

              <div className="admin-form__group">
                <label>Título</label>
                <input 
                  type="text" 
                  name="title" 
                  defaultValue={editingSlide?.title}
                  required 
                />
              </div>

              <div className="admin-form__group">
                <label>Subtítulo</label>
                <input 
                  type="text" 
                  name="subtitle" 
                  defaultValue={editingSlide?.subtitle}
                  required 
                />
              </div>

              <div className="admin-form__group">
                <label>Descrição</label>
                <textarea 
                  name="description" 
                  rows={3}
                  defaultValue={editingSlide?.description}
                  required
                ></textarea>
              </div>

              <div className="admin-form__row">
                <div className="admin-form__group">
                  <label>Texto do Botão</label>
                  <input 
                    type="text" 
                    name="cta" 
                    defaultValue={editingSlide?.cta}
                    required 
                  />
                </div>

                <div className="admin-form__group">
                  <label>Ordem</label>
                  <input 
                    type="number" 
                    name="order" 
                    min="1"
                    defaultValue={editingSlide?.order}
                    required 
                  />
                </div>
              </div>

              <div className="admin-form__group">
                <label className="admin-form__checkbox">
                  <input 
                    type="checkbox" 
                    name="active"
                    defaultChecked={editingSlide?.active}
                  />
                  Slide Ativo
                </label>
              </div>

              <div className="admin-form__actions">
                <button type="submit" className="btn btn--primary">
                  <Save size={20} />
                  {editingSlide ? 'Atualizar' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;