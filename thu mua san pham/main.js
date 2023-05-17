// Lắng nghe sự kiện click trên các nút "Mua sản phẩm"
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const url = `trang-mua-hang.html?id=${productId}`;
    window.location.href = url;
  });
});
