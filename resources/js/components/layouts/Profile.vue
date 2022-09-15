<template>
    <div>
		<div class="container">
			<div class="row align-items-start">
				<div class="col">
					<ul class="nav">
						<li class="nav-item">
							<router-link :to="{ name: 'profile'}" class="nav-link">Profile</router-link>
						</li>
						<li class="nav-item">
							<router-link :to="{ name: 'upload'}" class="nav-link">Upload Image</router-link>
						</li>
					</ul>
				</div>
				<div class="col">
					<ul class="nav justify-content-end">
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0)" @click="logout">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr>
        <main class="mt-3">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"profile-layout",
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>
