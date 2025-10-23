export async function GET() {
  try {
    // Fetch products from the external API
    const response = await fetch('https://leadoraglobal.vercel.app/api/product_management');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Return the data in the same format
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json(
      { 
        error: 'Failed to fetch products',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
