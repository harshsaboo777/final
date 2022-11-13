import React from "react";
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';
import { useState } from "react";

export default function Pie_individual(props) {
	
	const data = {
		labels: props.labels,
		datasets: [
		  {
			label: props.heading,
			data: props.values,
			backgroundColor: [
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(54, 162, 235, 0.2)',
			  'rgba(255, 206, 86, 0.2)',
			  'rgba(75, 192, 192, 0.2)',
			  'rgba(153, 102, 255, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
			  'rgba(255, 99, 132, 1)',
			  'rgba(54, 162, 235, 1)',
			  'rgba(255, 206, 86, 1)',
			  'rgba(75, 192, 192, 1)',
			  'rgba(153, 102, 255, 1)',
			  'rgba(255, 159, 64, 1)',
			],
			borderWidth: 3,
		  },
		],
	  };
	const iid = props.iid;

	return (
		<>
			<button
				type="button"
				class="btn btn-warning "
				data-toggle="modal"
				data-target={`#id${iid}`}
			>
				{props.heading}
			</button>

			<div class="modal" id={`id${iid}`}>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">{props.heading}</h4>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
							>
								&times;
							</button>
						</div>

						<div class="modal-body ">
                        <Doughnut data={data} />
						</div>

						
					</div>
				</div>
			</div>
		</>
	);
}
