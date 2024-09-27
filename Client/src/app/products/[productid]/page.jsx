
import Image from 'next/image';

export default function ProductPage({params}) {
    const {productid} = params
  return (
    <div className="container mx-auto p-6">
        <h1>product id : {productid} </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <Image src="/images/dress-main.png" alt="Product" width={500} height={600} />
          <div className="flex mt-4 space-x-2">
            <Image src="/images/dress-thumb1.png" alt="Thumbnail" width={100} height={120} />
            <Image src="/images/dress-thumb2.png" alt="Thumbnail" width={100} height={120} />
            <Image src="/images/dress-thumb3.png" alt="Thumbnail" width={100} height={120} />
            <Image src="/images/dress-thumb4.png" alt="Thumbnail" width={100} height={120} />
          </div>
        </div>

        {/* بخش اطلاعات محصول */}
        <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold">YK Disney</h1>
          <p className="text-gray-700 mt-2">Girls Pink Moana Printed Dress</p>
          <div className="flex items-center mt-2">
            <span className="text-xl font-semibold">$80.00</span>
            <span className="text-gray-500 line-through ml-2">$100.00</span>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-medium">Color</h3>
            <div className="flex space-x-2 mt-2">
              <button className="w-6 h-6 bg-red-500 rounded-full"></button>
              <button className="w-6 h-6 bg-green-500 rounded-full"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
              <button className="w-6 h-6 bg-yellow-500 rounded-full"></button>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-medium">Size</h3>
            <div className="flex space-x-2 mt-2">
              <button className="px-4 py-2 border rounded">S</button>
              <button className="px-4 py-2 border rounded">M</button>
              <button className="px-4 py-2 border rounded">L</button>
              <button className="px-4 py-2 border rounded">XL</button>
              <button className="px-4 py-2 border rounded">XXL</button>
            </div>
          </div>

          <div className="flex mt-4 items-center space-x-2">
            <button className="px-4 py-2 bg-gray-300 rounded">-</button>
            <span>1</span>
            <button className="px-4 py-2 bg-gray-300 rounded">+</button>
          </div>

          <button className="mt-6 w-full bg-black text-white py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>

      {/* بخش توضیحات */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Descriptions</h2>
        <p className="text-gray-700 mt-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
        </p>
      </div>

      {/* بخش محصولات مرتبط */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div className="border p-4 rounded-lg">
            <Image src="/images/related1.png" alt="Product 1" width={200} height={240} />
            <h3 className="font-semibold mt-2">US Polo</h3>
            <span className="text-lg font-bold">$40.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$50.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/images/related2.png" alt="Product 2" width={200} height={240} />
            <h3 className="font-semibold mt-2">Roadstar</h3>
            <span className="text-lg font-bold">$60.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$70.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/images/related3.png" alt="Product 3" width={200} height={240} />
            <h3 className="font-semibold mt-2">YK Disney</h3>
            <span className="text-lg font-bold">$30.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$35.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/images/related4.png" alt="Product 4" width={200} height={240} />
            <h3 className="font-semibold mt-2">Flora</h3>
            <span className="text-lg font-bold">$35.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$45.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
