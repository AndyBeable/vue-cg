var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/green-socks-on-white.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/blue-socks-on-white.jpg",
        variantQuantity: 0,
      },
    ],
    cart: 0,
    onSale: true,
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " are on sale!";
      }
      return this.brand + " " + this.product + " are not on sale";
    },
  },
});
