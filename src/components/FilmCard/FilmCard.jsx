import './FilmCard.css';

function FilmCard({ img, rating, title }) {
  return (
    <li className="card__item">
      <div className="card__poster">
        <img className="card__img" src={img} alt={title} />

        <div className="card__rating">
          <div className="card__start">
            {
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.57081 1.705L9.74415 4.05167C9.90415 4.37833 10.3308 4.69167 10.6908 4.75167L12.8175 5.105C14.1775 5.33167 14.4975 6.31833 13.5175 7.29167L11.8641 8.945C11.5841 9.225 11.4308 9.765 11.5175 10.1517L11.9908 12.1983C12.3641 13.8183 11.5041 14.445 10.0708 13.5983L8.07748 12.4183C7.71748 12.205 7.12415 12.205 6.75748 12.4183L4.76415 13.5983C3.33748 14.445 2.47081 13.8117 2.84415 12.1983L3.31748 10.1517C3.40415 9.765 3.25081 9.225 2.97081 8.945L1.31748 7.29167C0.344148 6.31833 0.657481 5.33167 2.01748 5.105L4.14415 4.75167C4.49748 4.69167 4.92415 4.37833 5.08415 4.05167L6.25748 1.705C6.89748 0.431667 7.93748 0.431667 8.57081 1.705Z"
                  stroke="#FFAD49"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            {rating}
          </div>
        </div>
      </div>

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <button className="card__favorite">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35003 19.58 9.35003H15.58C14.98 9.35003 14.48 8.85003 14.58 8.15003L15.08 4.95003C15.28 4.05003 14.68 3.05003 13.78 2.75003C12.98 2.45003 11.98 2.85003 11.58 3.45003L7.47998 9.55003" stroke="#7B6EF6" stroke-width="1.5" stroke-miterlimit="10" />
            <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z" stroke="#7B6EF6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          В избранное
        </button>
      </div>
    </li>
  );
}

export default FilmCard;
