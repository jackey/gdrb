Drupal.behaviors.RestServicesTest = {
	attach: function () {
		(function ($) {
			$.fn.serializeObject = function()
			{
			   var o = {};
			   var a = this.serializeArray();
			   $.each(a, function() {
			       if (o[this.name]) {
			           if (!o[this.name].push) {
			               o[this.name] = [o[this.name]];
			           }
			           o[this.name].push(this.value || '');
			       } else {
			           o[this.name] = this.value || '';
			       }
			   });
			   return o;
			};

			var uid = 1;
			var apipath = "/third_content";

			// Simple example.
			// of calling user update services
			// var account = {
			// 	uid: uid,
			// 	mail: 'asd@a.com',
			// 	pass: '123456',
			// 	name: 'admin',
			// 	current_pass: 'admin'
			// };
			// $.ajax({
			// 	type: "PUT",
			// 	url: apipath + "/user/1",
			// 	dataType: "json",
			// 	data: JSON.stringify({data: account}),
			// 	contentType: "application/json",
			// 	success: function (data) {
			// 		console.log(data);
			// 	}
			// });

			// Simple example form (include user profile picture )
			// Of calling user update services
			// $("#update_user_service").click(function () {
			// 	try {
			// 		var account = $("#user-profile-form-service").serializeObject();
			// 		$.ajax({
			// 			type: "PUT",
			// 			url: apipath + "/user/1",
			// 			dataType: "json",
			// 			data: JSON.stringify({data: account}),
			// 			contentType: "application/json",
			// 			success: function (ret) {
			// 				console.log(ret);
			// 			}
			// 		});
			// 	}
			// 	catch(e) {
			// 		console.log(e.message);
			// 	}

			// 	return false;
			// });
			
			// Test like services example
			// Test like
			// function FlagAPI(flag_name) {
			// 	var api_path = "/third_content/flag/";
			// 	var interface = function (flag_name) {
			// 		this.flag_name = flag_name;
			// 	}

			// 	interface.prototype.isFlaged = function (nid, uid, callback) {
			// 		var data = {content_id: nid, flag_name: this.flag_name, uid: uid};
			// 		var url = api_path + "is_flagged";
			// 		this._request(url, data, "POST", callback);
			// 	}

			// 	interface.prototype._request = function (url, data, method, callback) {
			// 		Array.prototype.insert = function (index, item) {
			// 		  this.splice(index, 0, item);
			// 		};
			// 		$.ajax({
			// 			type: method,
			// 			url: url,
			// 			dataType: "json",
			// 			data: JSON.stringify(data),
			// 			contentType: "application/json",
			// 			success: function (ret) {
			// 				var args = Array.prototype.slice.call(arguments, 0);
			// 				args.insert(0, 'success');
			// 				callback.apply(this, args);
			// 			}
			// 		});
			// 	}

			// 	return new interface(flag_name);
			// }
			// $("#test_like").click(function () {
			// 	var api = FlagAPI('like');
			// 	api.isFlaged(722, 1, function(status) {
			// 		var args = Array.prototype.slice.call(arguments, 0);
			// 		if (status == 'success') {
			// 			var data = JSON.parse(args[1]);
			// 			console.log(data);
			// 			if (!data) {
			// 				alert('not flag yet');
			// 			}
			// 			else {
			// 				alert('flagged');
			// 			}
			// 		}
			// 	});
			// });


		})(jQuery);
	}
}