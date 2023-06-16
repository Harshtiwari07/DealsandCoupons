package com.dealsapp.user_management_mcs.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dealsapp.user_management_mcs.entity.User;
import com.dealsapp.user_management_mcs.repositories.UserRepository;

@Service
public class GroupUserDetailsService implements UserDetailsService {

	@Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = repository.findByUserName(username);
        
                user.orElseThrow(() -> new UsernameNotFoundException(username + " Not Found"));
                return user.map(GroupUserDetails::new).get();
    }

}
