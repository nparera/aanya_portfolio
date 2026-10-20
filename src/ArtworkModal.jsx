import { useEffect } from 'react'
import './ArtworkModal.css'

export default function ArtworkModal({ artwork, onClose }) {
  useEffect(() => {
    function closeWithEscape(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', closeWithEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeWithEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="artwork-modal"
        role="dialog"
        aria-modal="true"
        aria-label={artwork.title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close artwork details"
        >
          ×
        </button>

        <div className="modal-image-wrapper">
          <img
            className="modal-cover"
            src={artwork.cover}
            alt={artwork.title}
          />
        </div>

        <div className="modal-content">
          <div className="artwork-information">
            <h2>{artwork.title}</h2>
            <p>{artwork.year}</p>

            <p className="artwork-collection">
              {artwork.collection || artwork.medium}
            </p>

            {artwork.medium && (
              <p className="artwork-extra">{artwork.medium}</p>
            )}

            {artwork.dimensions && (
              <p className="artwork-extra">{artwork.dimensions}</p>
            )}
          </div>

          <div className="artwork-about">
            <h3>About</h3>
            <p>{artwork.description}</p>
          </div>

          {artwork.details.length > 0 && (
            <div className="detail-images">
              {artwork.details.map((image, index) => (
                <img
                  key={`${artwork.id}-${index}`}
                  src={image}
                  alt={`${artwork.title} detail ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}