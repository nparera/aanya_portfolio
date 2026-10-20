import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'

const portfolioData = {
  works: {
    title: 'Works',
    items: [
      {
        id: 'work-1',
        title: 'Artwork Title',
        year: '2026',
        medium: 'Oil on canvas',
        dimensions: '24 × 36 in',
        cover: img1,
        details: [img2, img3],
        description:
          'A longer description of the artwork will go here.',
      },
      {
        id: 'work-2',
        title: 'Second Artwork',
        year: '2025',
        medium: 'Mixed media',
        dimensions: '18 × 24 in',
        cover: img4,
        details: [img5],
        description:
          'Information about the concept and process will go here.',
      },
    ],
  },

  sketchbook: {
    title: 'From My Sketchbook',
    items: [
      {
        id: 'sketch-1',
        title: 'Sketchbook Study',
        year: '2026',
        medium: 'Graphite on paper',
        dimensions: '8 × 10 in',
        cover: img2,
        details: [img3],
        description: 'Notes about this sketchbook study will go here.',
      },
    ],
  },

  'bittikake-tittra': {
    title: 'Bittikake + Tittra',
    items: [
      {
        id: 'bittikake-1',
        title: 'Project Title',
        year: '2026',
        medium: 'Mixed media',
        dimensions: '',
        cover: img3,
        details: [img1, img4],
        description: 'A description of this project will go here.',
      },
    ],
  },

  publications: {
    title: 'Publications & Writing',
    items: [
      {
        id: 'publication-1',
        title: 'Publication Title',
        year: '2026',
        medium: 'Publication',
        dimensions: '',
        cover: img4,
        details: [],
        description:
          'A summary of the publication or written work will go here.',
      },
    ],
  },

  exhibitions: {
    title: 'Exhibitions',
    items: [
      {
        id: 'exhibition-1',
        title: 'Exhibition Title',
        year: '2026',
        medium: 'Group exhibition',
        dimensions: '',
        cover: img5,
        details: [img1, img2],
        description:
          'The exhibition location, context and details will go here.',
      },
    ],
  },
}

export default portfolioData