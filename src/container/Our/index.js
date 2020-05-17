import React, { Fragment } from "react";
import about from "../../img/about.png";
import foodItem1 from "../../img/food_item/food_item_1.png";
import foodItem2 from "../../img/food_item/food_item_2.png";
import foodItem3 from "../../img/food_item/food_item_3.png";
import left_2 from "../../img/icon/left_2.svg";

const Our = () => {
	return (
		<Fragment>
			<section class='exclusive_item_part blog_item_section'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-5'>
							<div className='section_tittle'>
								<p>Popular Dishes</p>
								<h2>Our Exclusive Items</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6 col-lg-4'>
							<div className='single_blog_item'>
								<div className='single_blog_img'>
									<img src={foodItem1} alt='' />
								</div>
								<div className='single_blog_text'>
									<h3>Indian Burger</h3>
									<p>
										Was brean shed moveth day yielding tree yielding day were
										female and{" "}
									</p>
									<a href='#' className='btn_3'>
										Read More <img src={left_2} alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-lg-4'>
							<div className='single_blog_item'>
								<div className='single_blog_img'>
									<img src={foodItem2} alt='' />
								</div>
								<div className='single_blog_text'>
									<h3>Cremy Noodles</h3>
									<p>
										Was brean shed moveth day yielding tree yielding day were
										female and{" "}
									</p>
									<a href='#' className='btn_3'>
										Read More <img src={left_2} alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-lg-4'>
							<div className='single_blog_item'>
								<div className='single_blog_img'>
									<img src={foodItem3} alt='' />
								</div>
								<div className='single_blog_text'>
									<h3>Honey Meat</h3>
									<p>
										Was brean shed moveth day yielding tree yielding day were
										female and{" "}
									</p>
									<a href='#' className='btn_3'>
										Read More <img src={left_2} alt='' />
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-lg-4 d-none d-sm-block d-lg-none'>
							<div className='single_blog_item'>
								<div className='single_blog_img'>
									<img src={foodItem1} alt='' />
								</div>
								<div className='single_blog_text'>
									<h3>Cremy Noodles</h3>
									<p>
										Was brean shed moveth day yielding tree yielding day were
										female and{" "}
									</p>
									<a href='#' className='btn_3'>
										Read More <img src={left_2} alt='' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='about_part'>
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div className='col-sm-4 col-lg-5 offset-lg-1'>
							<div className='about_img'>
								<img src={about} alt='' />
							</div>
						</div>
						<div className='col-sm-8 col-lg-4'>
							<div className='about_text'>
								<h5>Our History</h5>
								<h2>Where The Food’s As Good As The Root Beer.</h2>
								<h4>Satisfying people hunger for simple pleasures</h4>
								<p>
									May over was. Be signs two. Spirit. Brought said dry own
									firmament lesser best sixth deep abundantly bearing, him,
									gathering you blessed bearing he our position best ticket in
									month hole deep{" "}
								</p>
								<a href='#' className='btn_3'>
									Read More <img src={left_2} alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Our;
