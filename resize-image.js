import sharp from 'sharp';
import path from 'path';

async function resizeImage() {
  try {
    const inputPath = 'src/assets/img/HGT-converted.png';
    const outputPath = 'src/assets/img/HGT-converted-resized.png';
    
    // 获取原图片信息
    const metadata = await sharp(inputPath).metadata();
    console.log('Original image size:', metadata.width, 'x', metadata.height);
    
    // 计算新的尺寸（放大1.5倍）
    const newWidth = Math.round(metadata.width * 1.5);
    const newHeight = Math.round(metadata.height * 1.5);
    
    console.log('New image size:', newWidth, 'x', newHeight);
    
    // 放大图片
    await sharp(inputPath)
      .resize(newWidth, newHeight, {
        kernel: sharp.kernel.lanczos3,
        fit: 'fill'
      })
      .png()
      .toFile(outputPath);
    
    console.log('Image resized successfully!');
    console.log('Output file:', outputPath);
    
  } catch (error) {
    console.error('Error resizing image:', error);
  }
}

// 运行脚本
resizeImage(); 