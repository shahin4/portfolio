export default {
    name: 'testimonial', // Name of your schema type
    title: 'Testimonial', // Human-readable title
    type: 'document', // Indicates it's a document type
  
    fields: [
      {
        name: 'name', // Name of the field
        title: 'Name', // Human-readable title
        type: 'string', // Data type (string)
      },
      {
        name: 'company', // Name of the field
        title: 'Company', // Human-readable title
        type: 'string', // Data type (string)
      },
      {
        name: 'image', // Name of the field
        title: 'Image', // Human-readable title
        type: 'image', // Data type (image)
        options: {
          hotspot: true, // Allow cropping and resizing
        },
    },
    {
        name: 'feedback', // Name of the field
        title: 'Feedback', // Human-readable title
        type: 'string', // Data type (multi-line text)
      },
      
      
    ],
  };
  