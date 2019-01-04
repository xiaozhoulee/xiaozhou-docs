<template>
	<div>
		<ul>
			<li><router-link to="/">主页</router-link></li>
			<li><router-link to="/movies">电影</router-link></li>
			<li><router-link to="/images">图片</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>