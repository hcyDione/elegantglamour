module.exports = Behavior({
	behaviors: [],
	properties:{

	},
	data: {
		behaviordata: '这是一个行为的数据'
	},
	attached: function () {
		console.log('There is a function related the life cycle')
	},
	methods: {
		myMethod: function () {
			
		}
	}
}) 