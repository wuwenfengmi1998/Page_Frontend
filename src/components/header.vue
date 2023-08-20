<template>
     <div class="header">	
      <div class="wrap"> 
          <div class="logo">
			 <a href="index.html"><img src="../images/logo.png" alt=""/></a>
		  </div>
		  <div class="header-right">
			 <div id='cssmenu'>
				<ul>
				   <li><router-link to="/home">Home</router-link></li> |
				   <li><router-link to="/works">Works</router-link></li> |
				   <li><router-link to="/blog">Blog</router-link></li> |
				   <li><router-link to="/about">About</router-link></li> |
				   <li><router-link to="/todolist">To Do</router-link></li>
				</ul>
			 </div>
			 <div class="search_box">
				<form>
				   <input type="text" placeholder="Search" value=""><input type="submit" value=" ">
			    </form>
			 </div>
		   </div>
		   <div class="clear"></div>
      </div>
    </div>

</template>