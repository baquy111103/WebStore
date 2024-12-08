// backend/seed.js
const mongoose = require('mongoose');
const Product = require('./product'); // Đảm bảo đường dẫn chính xác
const Category = require('./category'); // Đảm bảo đường dẫn chính xác

// Kết nối đến MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/webbanhang', { // Thay đổi URL nếu cần
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

// Chèn dữ liệu mẫu
const seedProducts = async () => {
    await connectDatabase();

    // Tạo một danh mục mẫu trước
    const category = new Category({ category: 'Clothing' });
    await category.save();

    // Dữ liệu mẫu cho bảng Product
    const productData = {
        id_category: category._id, // Sử dụng id của danh mục vừa tạo
        name_product: 'Sample Product',
        price_product: 99.99,
        image: '../public/img/nophoto.jpg',
        describe: 'This is a sample product description.',
        gender: 'Unisex',
        number: 100,
    };

    try {
        const product = new Product(productData);
        await product.save();
        console.log("Product saved successfully:", product);
    } catch (error) {
        console.error("Error saving product:", error);
    } finally {
        mongoose.connection.close();
    }
};

// Gọi hàm nhập dữ liệu
seedProducts();
