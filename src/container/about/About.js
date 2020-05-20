import React from "react";

import play from "../../img/icon/play.svg";
import left_1 from "../../img/icon/left_1.svg";

const About = () => {
	return (
		<div className='cover_1 overlay bg-light'>
			<div className='img_bg' data-stellar-background-ratio='0.5'>
				<div className='container'>
					<div className='row align-items-center justify-content-center text-center'>
						<div className='col-md-10' data-aos='fade-up'>
							<h2 className='heading mb-5'>Welcome to Meal</h2>
							<p>
								<a
									href='#section-reservation'
									className='smoothscroll btn btn-outline-white px-5 py-3'>
									Reserve A Table
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
