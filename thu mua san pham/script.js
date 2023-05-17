document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);
  
    if (product) {
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-description').textContent = product.description;
    }
  });
  
  // Hàm giả lập lấy thông tin sản phẩm dựa trên ID
  function getProductById(productId) {
    // Giả sử có một danh sách sản phẩm với thông tin
    const products = [
      { id: '1', name: 'Tên sản phẩm 1', description: 'Mô tả sản phẩm 1...' },
      { id: '2', name: 'Tên sản phẩm 2', description: 'Mô tả sản phẩm 2...' },
      // Thêm các sản phẩm khác vào đây
    ];
  
    return products.find(product => product.id === productId);
  }
  