import fetch from 'isomorphic-fetch';

export function getService(url, callback) {
	return () => {
		return fetch( url, {
			method: 'GET',
		        credentials: 'same-origin',
		        headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
		        dataType: 'json'
		    })
	        .then(function (response) {
	            return response.json()
	        })
	        .then(function (response) {
	        	console.log(response);
	        })
	}
}