let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/green-socks-on-white.jpg',
    inventory: 6,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColour: 'green',
        variantImage: './assets/green-socks-on-white.jpg',
      },
      {
        variantId: 2235,
        variantColour: 'blue',
        variantImage: './assets/blue-socks-on-white.jpg',
      },
    ],
    // sizes: ['6', '7', '8', '9'],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
