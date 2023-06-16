package com.dealsapp.user_management_mcs.controller;

import java.security.Principal;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dealsapp.user_management_mcs.entity.User;
import com.dealsapp.user_management_mcs.jwtconfig.AuthenticationRequest;
import com.dealsapp.user_management_mcs.jwtconfig.AuthenticationResponse;
import com.dealsapp.user_management_mcs.jwtconfig.JwtUtil;
import com.dealsapp.user_management_mcs.repositories.UserRepository;
import com.dealsapp.user_management_mcs.service.GroupUserDetailsService;
import com.dealsapp.user_management_mcs.service.ProfileService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	ProfileService service;

    @Autowired
    private UserRepository repository;

    //@Autowired
    //private BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@Autowired
	private GroupUserDetailsService userDetailsService;

    @PostMapping("/join")
    public String joinMyGroup(@RequestBody User user) {
      service.joinGroup(user);
        return "Hi " + user.getUserName() + " welcome to group !";
    }
    
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
   

    @GetMapping("/access/{userId}/{userRole}")
    @Secured("ROLE_ADMIN")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String giveAccessToMyUser(@PathVariable String userId, @PathVariable String userRole, Principal principal) {
        User user = repository.findById(userId).get();
        List<String> activeRoles = getRolesByLoggedInUser(principal);
        String newRole = "";
        if (activeRoles.contains(userRole)) {
            newRole = user.getRoles() + "," + userRole;
            user.setRoles(newRole);
        }
       service.giveAccessToUser(userId, userRole, principal);
        return "Hi " + user.getUserName() + " New Role assign to you by " + principal.getName();
    }

    @GetMapping
    @Secured("ROLE_ADMIN")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<User> loadMyUsers() {
        return service.loadUsers();
    }

    @GetMapping("/test")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String testUserAccess() {
        return "user can only access this !";
    }
    
    @DeleteMapping("/delete/{id}")
    @Secured("ROLE_ADMIN")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String deleteMyUserById(@PathVariable("id") String id)
    {
    	service.deleteById(id);
    	return "id no : "+id+" is deleted";
    }

   
    
    
    
    private List<String> getRolesByLoggedInUser(Principal principal) {
        String roles = getMyLoggedInUser(principal).getRoles();
        List<String> assignRoles = Arrays.stream(roles.split(",")).collect(Collectors.toList());
        if (assignRoles.contains("ROLE_ADMIN")) {
            return Arrays.stream(UserConstant.ADMIN_ACCESS).collect(Collectors.toList());
        }
       
        return Collections.emptyList();
    }

    
    
    
    private User getMyLoggedInUser(Principal principal) {
        return service.getLoggedInUser(principal);
    }
}