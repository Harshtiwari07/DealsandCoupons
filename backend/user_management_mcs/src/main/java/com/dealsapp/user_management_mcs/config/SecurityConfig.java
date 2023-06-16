package com.dealsapp.user_management_mcs.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.dealsapp.user_management_mcs.filters.JwtRequestFilter;
import com.dealsapp.user_management_mcs.jwtconfig.JwtUtil;
import com.dealsapp.user_management_mcs.service.GroupUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	    @Autowired
	    private GroupUserDetailsService groupUserDetailsService;
	    
	    @Autowired
		private JwtUtil jwtTokenUtil;
	    
	    @Autowired
		private JwtRequestFilter jwtRequestFilter;

	    @Override
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	        auth.userDetailsService(groupUserDetailsService);
	    }
	    @Override
		@Bean
		public AuthenticationManager authenticationManagerBean() throws Exception {
			return super.authenticationManagerBean();
		}

	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	    	http.csrf().disable();http.authorizeRequests().antMatchers("/user/join").permitAll();
			http.authorizeRequests().antMatchers("/authenticate").permitAll().
					anyRequest().authenticated().and().
					exceptionHandling().and().sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	
	    }

	    @Bean
		public PasswordEncoder passwordEncoder() {
			return NoOpPasswordEncoder.getInstance();
	    }

    }
