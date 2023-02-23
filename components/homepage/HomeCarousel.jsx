import Glide from '@glidejs/glide';
import { useEffect, useRef } from 'react';

export const HomeCarousel = () => {
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel !== null) {
      new Glide('.glide', {
        type: 'carousel',
        autoplay: 1000 * 5,
      }).mount();
    }
  }, [carousel]);

  return (
    <div className="banner-main-inner">
      <div className="glide" ref={carousel}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <picture>
                <img src="/images/banners/banner-01.jpg" alt=""></img>
              </picture>
            </li>
            <li className="glide__slide">
              <picture>
                <img src="/images/banners/banner-02.jpg" alt=""></img>
              </picture>
            </li>
            <li className="glide__slide">
              <picture>
                <img src="/images/banners/banner-03.jpg" alt=""></img>
              </picture>
            </li>
          </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
          <button
            className="button glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="button glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
