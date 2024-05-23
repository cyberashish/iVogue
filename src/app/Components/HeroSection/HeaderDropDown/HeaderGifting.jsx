import React from "react";
import corporateimg from "/public/images/homepage/Gifting/corporate-gifting-s.webp"
import festiveimg from "/public/images/homepage/Gifting/sgifting-dropdown-update.webp"
import budgetimg from "/public/images/homepage/Gifting/giftby-budget.webp"
import personasimg from "/public/images/homepage/Gifting/gifts-by-personas-s.webp"
import egiftimg from "/public/images/homepage/Gifting/e-gift-cards-s.webp"
import gift from "/public/images/homepage/Gifting/gift-wrapper.png"
import Image from "next/image";
import Link from "next/link";
const HeaderGifting = () => {
  return (
    <>
      <div className="dropdown-menu header-menu left-0 w-100 rounded-0 py-7 pb-54">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="img-wrapper">
                    <Image
                      src={corporateimg}
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <div className="items-wrapper">
                      <h3 className="text-uppercase text-black fs-3 mt-3 px-3 py-1 border border-3 rounded-top border-primary mb-65 position-relative">
                        COLLABORATIONS
                        <Image src={gift} alt="image" className="position-absolute gift-size " />
                      </h3>
                      <div className="list-unstyled text-start ps-0 d-flex flex-column gap-58">
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          Employee Kits
                          </Link>
                        </span>
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          Festive Kits
                          </Link>
                        </span>
                        <span className="fw-bold text-primary fs-3">
                          <Link href="/" className="text-primary">
                            VIEW ALL +
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="img-wrapper">
                    <Image
                      src={festiveimg}
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <div className="items-wrapper">
                      <h3 className="text-uppercase text-black fs-3 mt-3 mb-65">
                      FESTIVE GIFT BUNDLES
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="img-wrapper">
                    <Image
                      src={budgetimg}
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <div className="items-wrapper">
                      <h3 className="text-uppercase text-black fs-3 mt-3 mb-65">
                      GIFTS BY BUDGET
                      </h3>
                      <div className="list-unstyled text-start ps-0 d-flex flex-column gap-58">
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          Gifts Under 1000
                          </Link>
                        </span>
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          Gifts Under 2500
                          </Link>
                        </span>
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          Gifts Under 5000
                          </Link>
                        </span>
                        <span className="fw-bold text-primary fs-3">
                          <Link href="/" className="text-primary">
                            VIEW ALL +
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="img-wrapper">
                    <Image
                      src={personasimg}
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <div className="items-wrapper">
                      <h3 className="text-uppercase text-black fs-3 mt-3 mb-65">
                      GIFTS BY PERSONAS
                      </h3>
                      <div className="list-unstyled text-start ps-0 d-flex flex-column gap-58">
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          The Techie
                          </Link>
                        </span>
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          The Organiser
                          </Link>
                        </span>
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          The Workaholic
                          </Link>
                        </span>
                        <span className="fs-3">
                          <Link href="/" className="text-decoration-none">
                          he Traveller
                          </Link>
                        </span>
                        <span className="fw-bold text-primary fs-3">
                          <Link href="/" className="text-primary">
                            VIEW ALL +
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="img-wrapper">
                    <Image
                      src={egiftimg}
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex justify-content-start">
                    <div className="items-wrapper">
                      <h3 className="text-uppercase text-black fs-3 mt-3 mb-65">
                      E-GIFT CARDS
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderGifting;
