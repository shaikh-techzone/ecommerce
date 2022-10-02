import React from "react";
import category1 from "../../img/category-1.jpg";

const Sidebar = () => {
	return (
		<>
			<div className='col-md-3'>
				<div className='sidebar-widget category'>
					<h2 className='title'>Category</h2>
					<ul>
						<li>
							<a href='#'>Lorem Ipsum</a>
							<span>(83)</span>
						</li>
						<li>
							<a href='#'>Cras sagittis</a>
							<span>(198)</span>
						</li>
						<li>
							<a href='#'>Vivamus</a>
							<span>(95)</span>
						</li>
						<li>
							<a href='#'>Fusce vitae</a>
							<span>(48)</span>
						</li>
						<li>
							<a href='#'>Vestibulum</a>
							<span>(210)</span>
						</li>
						<li>
							<a href='#'>Proin phar</a>
							<span>(78)</span>
						</li>
					</ul>
				</div>

				{/* <div className="sidebar-widget image">
          <h2 className="title">Featured Product</h2>
          <a href="#">
            <img src={category1} alt="Image" />
          </a>
        </div> */}

				<div className='sidebar-widget brands'>
					<h2 className='title'>Our Brands</h2>
					<ul>
						<li>
							<a href='#'>Nulla </a>
							<span>(45)</span>
						</li>
						<li>
							<a href='#'>Curabitur </a>
							<span>(34)</span>
						</li>
						<li>
							<a href='#'>Nunc </a>
							<span>(67)</span>
						</li>
						<li>
							<a href='#'>Ullamcorper</a>
							<span>(74)</span>
						</li>
						<li>
							<a href='#'>Fusce </a>
							<span>(89)</span>
						</li>
						<li>
							<a href='#'>Sagittis</a>
							<span>(28)</span>
						</li>
					</ul>
				</div>

				{/* <div className="sidebar-widget tag">
          <h2 className="title">Tags Cloud</h2>
          <a href="#">Lorem ipsum</a>
          <a href="#">Vivamus</a>
          <a href="#">Phasellus</a>
          <a href="#">pulvinar</a>
          <a href="#">Curabitur</a>
          <a href="#">Fusce</a>
          <a href="#">Sem quis</a>
          <a href="#">Mollis metus</a>
          <a href="#">Sit amet</a>
          <a href="#">Vel posuere</a>
          <a href="#">orci luctus</a>
          <a href="#">Nam lorem</a>
        </div> */}
			</div>
		</>
	);
};

export default Sidebar;
