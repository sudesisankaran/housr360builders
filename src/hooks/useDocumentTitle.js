import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * Custom hook to dynamically update document title and meta description for SEO.
 * @param {string} title - Page specific title
 * @param {string} description - Optional page meta description
 */
export function useDocumentTitle(title, description = null) {
  useEffect(() => {
    const originalTitle = document.title;
    const baseTitle = siteConfig.brand.name;
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | Luxury Construction & Architectural Design`;

    let metaDescTag = document.querySelector('meta[name="description"]');
    let originalDesc = metaDescTag ? metaDescTag.getAttribute('content') : '';

    if (description && metaDescTag) {
      metaDescTag.setAttribute('content', description);
    }

    return () => {
      document.title = originalTitle;
      if (metaDescTag && originalDesc) {
        metaDescTag.setAttribute('content', originalDesc);
      }
    };
  }, [title, description]);
}
