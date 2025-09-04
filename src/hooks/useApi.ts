
import { useToast } from "@/hooks/use-toast";

export const useApi = () => {
  const { toast } = useToast();

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service: string;
    budget?: string;
    message: string;
    timeline?: string;
  }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Contact form submitted:', formData);

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });

      return { success: true, message: "Form submitted successfully" };
    } catch (error: unknown) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: (error instanceof Error && error.message) ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const subscribeNewsletter = async (email: string) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Newsletter subscription:', email);

      toast({
        title: "Subscribed!",
        description: "Welcome to our newsletter! You'll receive the latest updates.",
      });

      return { success: true, message: "Successfully subscribed to newsletter" };
    } catch (error: unknown) {
      console.error('Newsletter subscription error:', error);

      if (error instanceof Error && error.message?.includes('already subscribed')) {
        toast({
          title: "Already subscribed",
          description: "This email is already subscribed to our newsletter.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: (error instanceof Error && error.message) ? error.message : "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
      throw error;
    }
  };

  const applyForJob = async (applicationData: {
    job_id: string;
    applicant_name: string;
    applicant_email: string;
    applicant_phone?: string;
    cover_letter?: string;
    resume_url?: string;
  }) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Job application submitted:', applicationData);

      toast({
        title: "Application Sent!",
        description: "Your job application has been submitted successfully.",
      });

      return { success: true, message: "Application submitted successfully" };
    } catch (error: unknown) {
      console.error('Job application error:', error);
      toast({
        title: "Error",
        description: (error instanceof Error && error.message) ? error.message : "Failed to submit application. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const fetchBlogPosts = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Return mock data
      const mockBlogPosts = [
        {
          id: '1',
          title: 'Welcome to Vinofyx',
          content: 'Learn about our journey and vision...',
          published: true,
          created_at: new Date().toISOString(),
          slug: 'welcome-to-vinofyx'
        },
        {
          id: '2',
          title: 'Digital Marketing Trends 2024',
          content: 'Explore the latest trends in digital marketing...',
          published: true,
          created_at: new Date().toISOString(),
          slug: 'digital-marketing-trends-2024'
        }
      ];

      console.log('Fetched blog posts:', mockBlogPosts);
      return mockBlogPosts;
    } catch (error: unknown) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts. Please try again.",
        variant: "destructive",
      });
      return [];
    }
  };

  const fetchProjects = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Return mock data
      const mockProjects = [
        {
          id: '1',
          title: 'E-commerce Platform',
          description: 'Complete e-commerce solution with modern design',
          created_at: new Date().toISOString(),
          image_url: '/realestate.jpg'
        },
        {
          id: '2',
          title: 'Corporate Website',
          description: 'Professional website for a leading corporation',
          created_at: new Date().toISOString(),
          image_url: '/logo.jpg'
        }
      ];

      console.log('Fetched projects:', mockProjects);
      return mockProjects;
    } catch (error: unknown) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to load projects. Please try again.",
        variant: "destructive",
      });
      return [];
    }
  };

  const fetchJobOpenings = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Return mock data
      const mockJobOpenings = [
        {
          id: '1',
          title: 'Digital Marketing Specialist',
          description: 'Join our team as a digital marketing specialist...',
          active: true,
          created_at: new Date().toISOString(),
          location: 'Hyderabad, India'
        },
        {
          id: '2',
          title: 'SEO Analyst',
          description: 'Looking for an experienced SEO analyst...',
          active: true,
          created_at: new Date().toISOString(),
          location: 'Remote'
        }
      ];

      console.log('Fetched job openings:', mockJobOpenings);
      return mockJobOpenings;
    } catch (error: unknown) {
      console.error('Error fetching job openings:', error);
      toast({
        title: "Error",
        description: "Failed to load job openings. Please try again.",
        variant: "destructive",
      });
      return [];
    }
  };

  return {
    submitContactForm,
    subscribeNewsletter,
    applyForJob,
    fetchBlogPosts,
    fetchProjects,
    fetchJobOpenings,
  };
};
