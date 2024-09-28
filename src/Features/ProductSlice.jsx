import { createSlice } from "@reduxjs/toolkit";

//creating the slice
const productSlice = createSlice({
  name: "priceCart",
  initialState: {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://www.thesun.co.uk/wp-content/uploads/2018/05/nintchdbpict0004083573263.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://w7.pngwing.com/pngs/217/82/png-transparent-silver-iphone-x-and-space-gray-iphone-x-iphone-8-plus-iphone-x-apple-facetime-telephone-iphone-x-gadget-mobile-phone-case-mobile-phone.png",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.ldlc.com%2Fld%2Fproducts%2F00%2F04%2F78%2F98%2FLD0004789875_2.jpg&f=1&nofb=1&ipt=78aecf4a931134603be8c7d2fcb252afe815ae1196c8800557fa5d7cceaa7527&ipo=images",
        ],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://m.media-amazon.com/images/I/31vlNjzb1ZL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingTHREEANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA64%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://www.pngitem.com/pimgs/m/358-3584764_an-image-of-huawei-p30-lite-huawei-p30.png",
        ],
      },
    ],
  },
  reducers: {
    // increasing the cart quantity
    Increment_Cart: (state, action) => {
      let { id } = action.payload;
      let index = state.products.findIndex((product) => product.id === id);
      if (index !== null) {
        state.products[index].quantity =
          (state.products[index].quantity || 1) + 1;
      }
    },
    //decreasing the cart quantity
    Decrement_Cart: (state, action) => {
      let { id } = action.payload;
      let index = state.products.findIndex((product) => product.id === id);
      if (index != null && state.products[index].quantity > 1) {
        state.products[index].quantity = state.products[index].quantity - 1;
      }
    },
    //removing the cart product
    Remove_Cart: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { Increment_Cart, Decrement_Cart, Remove_Cart } =
  productSlice.actions;
export default productSlice.reducer;
