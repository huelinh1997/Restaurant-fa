import React, { Fragment } from "react";
import logo from "../../img/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Fragment>
			<header className='main_menu '>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-12'>
							<nav className='navbar navbar-expand-lg navbar-light'>
								<a className='navbar-brand' href='index.html'>
									{" "}
								</a>
								<button
									className='navbar-toggler'
									type='button'
									data-toggle='collapse'
									data-target='#navbarSupportedContent'
									aria-controls='navbarSupportedContent'
									aria-expanded='false'
									aria-label='Toggle navigation'>
									<span className='navbar-toggler-icon'></span>
								</button>

								<div
									className='collapse navbar-collapse main-menu-item justify-content-end'
									id='navbarSupportedContent'>
									<ul className='navbar-nav'>
										<li className='nav-item'>
											<Link className='nav-link' to=''>
												Home
											</Link>
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to=''>
												About
											</Link>
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to='/menu'>
												Menu
											</Link>
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to='/'>
												Chefs
											</Link>
										</li>
										<li className='nav-item dropdown'>
											<Link
												className='nav-link dropdown-toggle'
												href='blog.html'
												id='navbarDropdown'
												role='button'
												data-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='false'>
												Blog
											</Link>
											<div
												className='dropdown-menu'
												aria-labelledby='navbarDropdown'>
												<Link className='dropdown-item' to='blog.html'>
													Blog
												</Link>
												<Link className='dropdown-item' to='single-blog.html'>
													Single blog
												</Link>
												<Link className='dropdown-item' to='elements.html'>
													Elements
												</Link>
											</div>
										</li>
										<li className='nav-item'>
											<Link className='nav-link' to='contact.html'>
												Contact
											</Link>
										</li>
									</ul>
								</div>
								<div className='menu_btn'>
									<Link to='#' className='btn_1 d-none d-sm-block'>
										book a tabel
									</Link>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

export default Header;