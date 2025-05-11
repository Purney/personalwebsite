import config from "@/config";

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || config.appName,
    // up to 160 characters (how does your app help the user?)
    description: description || config.appDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://www.${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      locale: "en_US",
      type: "website",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

export const getWebsiteSchema = () => {
  return (
    <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "William Purnell - Freelance Software Developer from Bournemouth",
          "url": "https://www.william-purnell.com",
          "description": "Freelance software engineer specialising in .NET and React.js for startups and agencies.",
        })
      }}>
      </script>
  )
} 

export const getPersonSchema = () => {
  return (
    <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "William Purnell",
          "jobTitle": "Freelance Software Developer",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bournemouth",
            "addressCountry": "UK"
          },
          "url": "https://www.william-purnell.com",
          "sameAs": [
            "https://www.linkedin.com/in/william-purnell-uk",
            "https://github.com/Purney"
          ]
        }
        )
      }}>
      </script>
  )
}

export const getTestimonialSchema = (name, review, rating = "5") => {
  return (
    <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type" : "LocalBusiness",
            "name" : "William Purnell - Freelance Software Developer from Bournemouth",
            "description": "Professional web development services specializing in .NET, React, and AI integration.",
            "provider": {
              "@type": "Organization",
              "name": "William Purnell",
              "url": "https://www.william-purnell.com"
            },
          },
          "reviewBody": review,
          "author": {
            "@type": "Person",
            "name": name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": rating,
            "bestRating": "5"
          }
        })
      }}>
      </script>
  )
}

export const getContactSchema = () => {
  return (
    <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "email": "hello@william-purnell.com",
          "contactType": "General Inquiries",
          "areaServed": "Bournemouth, UK",
          "availableLanguage": "English"
        }
        )
      }}>
      </script>
  )
}


export const getCreativeWorkSchema = (name, description, dateCreated, languagesArray, imageUrl, id) => {
  return (
    <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": name,
          "description": description,
          "author": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "dateCreated": dateCreated,
          "programmingLanguage": languagesArray,
          "image": imageUrl,
          "url": "https://www.william-purnell.com/projects/" + id,
          "keywords": ["web development", "SaaS", "generative AI"]
        })
      }}>
      </script>
  )
}

export const getServicesSchema = () => {
  return (
    <>
    <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Design & Development",
          "serviceType": "Web Design & Development",
          "provider": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "areaServed": "Bournemouth, UK",
          "description": "Transform your online presence with custom-built websites designed for speed, functionality, and user engagement. Leveraging React.js, I create dynamic, responsive websites tailored to your business needs.",
          "availableChannel": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@william-purnell.com"
          }
        })
      }}>
      </script>
      <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Automation & AI",
          "serviceType": "Automation & AI",
          "provider": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "areaServed": "Bournemouth, UK",
          "description": "Enhance your applications with AI capabilities. From automating workflows with zapier to personalizing user experiences, I integrate cutting-edge generative AI technologies into your existing systems.",
          "availableChannel": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@william-purnell.com"
          }
        })
      }}>
      </script>
      <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Search Engine Optimisation",
          "serviceType": "SEO",
          "provider": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "areaServed": "Bournemouth, UK",
          "description": "Boost your online presence with tailored SEO strategies. I optimize your website for search engines, ensuring it ranks higher and attracts more visitors. From keyword research to on-page optimization, I cover all aspects of SEO.",
          "availableChannel": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@william-purnell.com"
          }
        })
      }}>
      </script>
      <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom Software Solutions",
          "serviceType": "Custom Software Solutions",
          "provider": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "areaServed": "Bournemouth, UK",
          "description": "Every business is unique, and so are your software requirements. I develop bespoke .NET solutions that streamline operations, boost productivity, and support your long-term goals.",
          "availableChannel": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@william-purnell.com"
          }
        })
      }}>
      </script>
      <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Bug fixing & Maintenance",
          "serviceType": "Bug fixing & Maintenance",
          "provider": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "areaServed": "Bournemouth, UK",
          "description": "Keep your software running smoothly with my bug-fixing and maintenance services. I ensure your applications are up-to-date, secure, and performing at their best. Whether it's a minor bug or a major overhaul, I've got you covered.",
          "availableChannel": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@william-purnell.com"
          }
        })
      }}>
      </script>
      <script  type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consulting Services",
          "serviceType": "Consulting Services",
          "provider": {
            "@type": "Person",
            "name": "William Purnell"
          },
          "areaServed": "Bournemouth, UK",
          "description": "Not sure how to get started? I offer consulting services to help you choose the right tools and strategies for your business. Whether you’re looking to optimize your current setup or embark on a new project, I'll guide you every step of the way.",
          "availableChannel": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "hello@william-purnell.com"
          }
        })
      }}>
      </script>
    </>
  )
}

export const getLocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "William Purnell - Freelance Software Developer from Bournemouth",
          "image": "https://www.william-purnell.com/assets/images/william-purnell-headshot.png",
          "email": "hello@william-purnell.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "96 Northfield Road", 
            "addressLocality": "Ringwood",
            "addressRegion": "Hampshire",
            "postalCode": "BH24 1SU", 
            "addressCountry": "UK"
          },
          "review": {"@type": "Review",
            "reviewBody": "It's been a smooth experience creating my custom 3D printing website with Will. He's always interested in developing the best user experience for my customers.",
    "author": {
      "@type": "Person",
      "name": "Ben Robb"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    }},
          "url": "https://www.william-purnell.com",
          "priceRange": "$$", // Adjust based on your pricing
          "openingHours": "Mo-Fr 08:00-17:00", // Replace with your actual hours
          "sameAs": [
            "https://www.linkedin.com/in/william-purnell-uk"
          ]
        })
      }}
    ></script>
  );
};