<template>
	<div class="footer-outer">
		<div class="footer">
			<div class="footer-block footer-block-left">In opdracht van <a href="https://sharevalue.nl">ShareValue</a>.</div>
			<div class="footer-block footer-block-center"><img src="../assets/images/sharevalue.svg"></div>
			<div class="footer-block footer-block-right"><a href="https://semekkelboom.nl">&copy; Sem Ekkelboom</a></div>
		</div>
	</div>
</template>

<style>
.footer-outer {
	display: flex;
	align-items: center;
	box-shadow: 0 -3px 6px rgba(0,0,0,0.08);
	background: white;
	margin-bottom: 0;
	height: 8vh;
}

.footer {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 0 10%;
}

.footer-block {
	flex-basis: 33.3333%;
}

.footer-block-left {
	text-align: left;
}

.footer-block-center {
	text-align: center;
}

.footer-block-center img {
	height: 5rem;
}

.footer-block-right {
	text-align: right;
}


</style>