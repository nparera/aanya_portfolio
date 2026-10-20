import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import portfolioData from './portfolioData'
import ArtworkModal from './ArtworkModal'
import './PortfolioCategory.css'

export default function PortfolioCategory() {
  const { category } = useParams()
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  const categoryData = portfolioData[category]

  if (!categoryData) {
    return (
      <main className="category-page">
        <p>Category not found.</p>
        <Link to="/">← Back to portfolio</Link>
      </main>
    )
  }

  return (
    <main className="category-page">
        <Link
        to="/"
        state={{ scrollTo: 'portfolio' }}
        className="back-link"
        >
        ← Back to portfolio
        </Link>

      <div className="artwork-grid">
        {categoryData.items.map((artwork) => (
          <button
            type="button"
            className="artwork-card"
            key={artwork.id}
            onClick={() => setSelectedArtwork(artwork)}
          >
            <img src={artwork.cover} alt={artwork.title} />

            <div className="artwork-card-text">
              <h2>{artwork.title}</h2>
              <p>{artwork.year}</p>
            </div>
          </button>
        ))}
      </div>
      <h2 className="section-heading category-heading">
        {categoryData.title}
      </h2>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </main>
  )
}