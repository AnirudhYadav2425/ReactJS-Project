import { IoShirtOutline } from "react-icons/io5";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useContext } from "react";
import { AllProductsContext } from "../productContext/ProductsContext";
import ProductCard from "./ProductCard";
const Home = () => {

  let { allProducts } = useContext(AllProductsContext);

  const categories = [
    {
      id: "men",
      title: "Men",
      icon: <IoShirtOutline />,
    },
    {
      id: "women",
      title: "Women",
      icon: <IoShirtOutline />,
    },
    {
      id: "kids",
      title: "Kids",
      icon: <IoShirtOutline />,
    },
    {
      id: "footware",
      title: "Footware",
      icon: <IoShirtOutline />,
    },
    {
      id: "accessories",
      title: "Accessories",
      icon: <IoShirtOutline />,
    },
  ];

  const brands = [
    {
      id: "nike",
      brandName: "Nike",
      icon: <IoShirtOutline />,
    },
    {
      id: "h&m",
      brandName: "H&M",
      icon: <IoShirtOutline />,
    },
    {
      id: "adidas",
      brandName: "Adidas",
      icon: <IoShirtOutline />,
    },
    {
      id: "zara",
      brandName: "Zara",
      icon: <IoShirtOutline />,
    },
    {
      id: "puma",
      brandName: "Puma",
      icon: <IoShirtOutline />,
    },
  ];

  const sampleProducts = [
    {
      image: "https://example.com/products/shirt.jpg",
      title: "cotton casual shirt",
      description:
        "comfortable and breathable cotton casual shirt for daily wear",
      category: "clothing",
      brand: "united colors",
      price: 999,
      salePrice: 799,
      totalStock: 50,
      averageReview: 4.2,
    },
    {
      image: "https://example.com/products/laptop.jpg",
      title: "hp pavilion laptop",
      description:
        "powerful hp laptop with i5 processor and 8GB RAM for multitasking",
      category: "electronics",
      brand: "hp",
      price: 58999,
      salePrice: 54999,
      totalStock: 20,
      averageReview: 4.5,
    },
    {
      image: "https://example.com/products/smartphone.jpg",
      title: "samsung galaxy s21",
      description:
        "android smartphone with dynamic AMOLED display and high-end camera",
      category: "mobiles",
      brand: "samsung",
      price: 69999,
      salePrice: 64999,
      totalStock: 35,
      averageReview: 4.6,
    },
    {
      image: "https://example.com/products/shoes.jpg",
      title: "nike running shoes",
      description:
        "lightweight running shoes for men with extra grip and durability",
      category: "footwear",
      brand: "nike",
      price: 4999,
      salePrice: 3999,
      totalStock: 75,
      averageReview: 4.3,
    },
    {
      image: "https://example.com/products/watch.jpg",
      title: "fossil analog watch",
      description:
        "premium analog wristwatch with leather strap and metal case",
      category: "accessories",
      brand: "fossil",
      price: 10999,
      salePrice: 8999,
      totalStock: 15,
      averageReview: 4.0,
    },
    {
      image: "https://example.com/products/mixer.jpg",
      title: "philips mixer grinder",
      description: "750-watt powerful mixer grinder for daily kitchen use",
      category: "home appliances",
      brand: "philips",
      price: 3899,
      salePrice: 3499,
      totalStock: 30,
      averageReview: 4.1,
    },
    {
      image: "https://example.com/products/book.jpg",
      title: "atomic habits book",
      description: "bestseller book on building habits for long-term success",
      category: "books",
      brand: "penguin",
      price: 499,
      salePrice: 399,
      totalStock: 200,
      averageReview: 4.8,
    },
    {
      image: "https://example.com/products/table.jpg",
      title: "wooden study table",
      description: "compact wooden study table with drawer and open shelf",
      category: "furniture",
      brand: "urban ladder",
      price: 7999,
      salePrice: 7499,
      totalStock: 10,
      averageReview: 3.9,
    },
    {
      image: "https://example.com/products/earbuds.jpg",
      title: "boat airdopes 441",
      description:
        "wireless bluetooth earbuds with immersive sound and long battery",
      category: "audio",
      brand: "boat",
      price: 2999,
      salePrice: 2499,
      totalStock: 60,
      averageReview: 4.4,
    },
    {
      image: "https://example.com/products/helmet.jpg",
      title: "vega full face helmet",
      description: "strong and stylish full face helmet for two-wheeler riders",
      category: "safety",
      brand: "vega",
      price: 1599,
      salePrice: 1399,
      totalStock: 40,
      averageReview: 4.1,
    },
  ];

  const items = [
    <div className="item h-[70vh]" data-value="1">
      <img
        src="/assets/image.png"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
    <div className="item h-[70vh]" data-value="2">
      <img
        src="/assets/image2.jpg"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
    <div className="item h-[70vh]" data-value="3">
      <img
        src="/assets/image3.jpg"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
    <div className="item h-[70vh]" data-value="4">
      <img
        src="/assets/image4.avif"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
    <div className="item h-[70vh]" data-value="5">
      <img
        src="/assets/image5.jpeg"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
  ];

  return (
    <div className="mt-[70px] w-full bg-gray-50">
      {/* <header className="h-[70vh] w-full relative">
        <img
          src="/assets/image.png"
          alt=""
          className="h-full w-full object-center object-cover"
        />

        <div className="absolute top-[15vh] left-20">
          <h1 className="text-5xl font-light mb-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor sit.</h2>
          <button className="bg-black text-white px-4 py-2 rounded">
            View Products
          </button>
        </div>
      </header> */}

      <header className="h-[70vh] w-full">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="slide"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
        />
      </header>

      <section className="py-10">
        <header className="p-10">
          <h1 className="font-extrabold text-center text-3xl">
            Shop by Category
          </h1>
        </header>

        <article className="flex items-center justify-evenly">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="py-3 px-12 rounded-lg bg-white shadow-xl border border-gray-200"
              >
                <figure className="text-6xl p-3">{category.icon}</figure>
                <h3 className="font-bold text-center pt-2">{category.title}</h3>
              </div>
            );
          })}
        </article>

        <header className="pt-30 pb-10">
          <h1 className="font-extrabold text-center text-3xl">
            Shop by Brands
          </h1>
        </header>

        <article className="flex items-center justify-evenly">
          {brands.map((brand) => {
            return (
              <div
                key={brand.id}
                className="py-3 px-12 rounded-lg bg-white shadow-xl border border-gray-200"
              >
                <figure className="text-6xl p-3">{brand.icon}</figure>
                <h3 className="font-bold text-center pt-2">
                  {brand.brandName}
                </h3>
              </div>
            );
          })}
        </article>

        <header className="pt-30 pb-10">
          <h1 className="font-extrabold text-center text-3xl">
            Featured Products
          </h1>
        </header>

        <article className="grid grid-cols-4 justify-items-center">
          {allProducts.map((product, idx) => {
            return <ProductCard key={idx} product={product}/>;
          })}
        </article>
      </section>
    </div>
  );
};

export default Home;
