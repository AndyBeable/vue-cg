let app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColour: 'green',
        variantImage: './assets/green-socks-on-white.jpg',
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColour: 'blue',
        variantImage: './assets/blue-socks-on-white.jpg',
        variantQuantity: 0,
      },
    ],
    // sizes: ['6', '7', '8', '9'],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    // removeFromCart() {
    //   this.cart--;
    // },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on Sale!';
      }
      return this.brand + ' ' + this.product + ' are not on Sale!';
    },
  },
});
