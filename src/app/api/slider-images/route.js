export async function GET() {
  try {
    // Mock data that matches your API response format
    const mockData = {
      success: true,
      data: [
        {
          id: 1,
          title: "Welcome to Leadora Global",
          description: "Empowering people through direct selling and quality products. Start your journey to financial freedom today.",
          imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
          linkUrl: "#about",
          sortOrder: 0
        },
        {
          id: 2,
          title: "Premium Beauty Products",
          description: "High-quality beauty and wellness products that deliver real results. Transform your life with our premium collection.",
          imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop",
          linkUrl: "#products",
          sortOrder: 1
        },
        {
          id: 3,
          title: "Join Our Community",
          description: "Become part of a supportive community. Low investment, high earning potential, and flexible working hours.",
          imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop",
          linkUrl: "#join",
          sortOrder: 2
        },
        {
          id: 4,
          title: "Digital Marketing Tools",
          description: "Access powerful digital marketing tools and training to expand your reach and grow your business.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
          linkUrl: "#tools",
          sortOrder: 3
        }
      ]
    };

    // In a real application, you would fetch this data from your actual API
    // const response = await fetch('https://your-api-endpoint.com/slider-images');
    // const data = await response.json();

    return Response.json(mockData);
  } catch (error) {
    console.error('Error fetching slider images:', error);
    return Response.json(
      { 
        success: false, 
        error: 'Failed to fetch slider images' 
      },
      { status: 500 }
    );
  }
}
