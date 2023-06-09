const Cart = ({ data }) => {
	const { students, classname, image, instructor } = data;
	return (
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<img className="object-cover h-[250px]" src={image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<div>
					<h2 className="card-title">Training Name : {classname}</h2>
					<h2 className="card-title">Instructor Name : {instructor.name}</h2>
				</div>

				<div className="mx-auto badge text-lg font-semibold p-4 badge-outline">
					Total Student : {students}
				</div>
			</div>
		</div>
	);
};

export default Cart;
