<template>
	<div class="font" ref="font">
		<grid :rows="3" v-for="(menuItem,index) in letter" :key="index">
			<grid-item class="grid-center" v-for="item in menuItem" :key="item" :label="item">
			</grid-item>
		</grid>
	</div>
</template>
<script>
	import {Grid,GridItem} from '../../components/grid'
	export default{
		name:'font',
		data(){
			return {
				letter:[]
			}
		},
		components:{Grid,GridItem},
		methods:{
			loadInfo(){
				for(var i=0;i<26;i++) {
					this.letter.push(String.fromCharCode((65+i)))
				}
				this.letter = _.chunk(this.letter,3)

				console.log(this.$refs.font)
			}
		},
		mounted(){
			this.loadInfo()
		}
	}
</script>
<style lang='scss'>
	.font{
		height: calc(100% - 46px);
		.grid-center .pixel-grid__label span{
			font-family: "Ruthie", cursive;
			font-size: 32px;
		}
		.pixel-grids::before{border: none;}
		.pixel-grid-item{
			&::before,&::after{
				border:none;
			}
		}
	}
</style>