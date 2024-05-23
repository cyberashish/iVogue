import Image from "next/image";
import React from "react";
import testimg from "/public/images/homepage/collections/drawstrings-collection-desktop.webp"
import allImg from "/public/images/homepage/collections/view-all-with-lifestyle-images.webp"
import CollectionDropItem from "./DropItem/CollectionDropItem";
import { HEADER_COLLECTIONS } from "@/api/homepage/homepage";
import Link from "next/link";
import artist from "/public/images/homepage/collections/do-artists-s.webp"
import collaborators from "/public/images/homepage/collections/collaborations-dropdown-update-tinder.webp"

const HeaderCollection = () => {
  return (
    <>
      <div className="dropdown-menu header-menu left-0 w-100 rounded-0 py-0 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-6 py-7">
                  <div className="row gy-7">
                    {HEADER_COLLECTIONS.map((item) => {
                      return (
                        <CollectionDropItem
                          key={item.key}
                          title={item.title}
                          image={item.image}
                          badge={item.badge}
                        />
                      );
                    })}
                    <div className="col-lg-4">
                      <div className="img-wrapper">
                        <Image src={allImg} alt="image" className="img-fluid" />
                      </div>
                      <h2 className="fs-3 text-black my-3 text-uppercase d-inline-block position-relative">
                        View All
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="px-8  border border-2 border-top-0 border-bottom-0 pt-7">
                    <div className="img-wrapper">
                      <Image src={artist} alt="image" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-start">
                      <div className="items-wrapper">
                        <h3 className="text-uppercase text-black fs-3 mt-3 mb-65">
                          DO ARTISTS
                        </h3>
                        <div className="list-unstyled text-start ps-0 d-flex flex-column gap-58">
                        <span className="fs-3">
                            <Link href="/" className="text-decoration-none">
                              <span className="fs-3 text-blacktext-uppercase d-inline-block position-relative">
                              Sho Sha
                                <div
                                  className="text-capitalize text-primary fs-2 lh-1 position-absolute font-graphik"
                                  style={{ right: "-26px", top: "-2px" }}
                                >
                                  New
                                </div>
                              </span>
                            </Link>
                          </span>
                          <span className="fs-3">
                            <Link href="/" className="text-decoration-none">
                              <span className="fs-3 text-blacktext-uppercase d-inline-block position-relative">
                              Mecha Chronicles
                                <div
                                  className="text-capitalize text-primary fs-2 lh-1 position-absolute font-graphik"
                                  style={{ right: "-26px", top: "-2px" }}
                                >
                                  New
                                </div>
                              </span>
                            </Link>
                          </span>
                          <span className="fs-3">
                              <Link href="/" className="text-decoration-none">
                                Hocus Pocus
                              </Link>
                            </span>
                            <span className="fs-3">
                              <Link href="/" className="text-decoration-none">
                                Wild Wonders
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
                </div>
                <div className="col-lg-3">
                  <div className="px-3 pt-7">
                    <div className="img-wrapper">
                      <Image src={collaborators} alt="image" className="img-fluid" />
                    </div>
                    <div className="d-flex justify-content-start">
                      <div className="items-wrapper">
                        <h3 className="text-uppercase text-black fs-3 mt-3 mb-65">
                        COLLABORATIONS
                        </h3>
                        <div className="list-unstyled text-start ps-0 d-flex flex-column gap-58">
                        <span className="fs-3">
                            <Link href="/" className="text-decoration-none">
                              <span className="fs-3 text-blacktext-uppercase d-inline-block position-relative">
                              Tinder
                                <div
                                  className="text-capitalize text-primary fs-2 lh-1 position-absolute font-graphik"
                                  style={{ right: "-26px", top: "-2px" }}
                                >
                                  New
                                </div>
                              </span>
                            </Link>
                          </span>
                          <span className="fs-3">
                            <Link href="/" className="text-decoration-none">
                              <span className="fs-3 text-blacktext-uppercase d-inline-block position-relative">
                              Playboy
                                <div
                                  className="text-capitalize text-primary fs-2 lh-1 position-absolute font-graphik"
                                  style={{ right: "-26px", top: "-2px" }}
                                >
                                  New
                                </div>
                              </span>
                            </Link>
                          </span>
                          <span className="fs-3">
                              <Link href="/" className="text-decoration-none">
                                Smartsters
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCollection;
