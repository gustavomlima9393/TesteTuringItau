package com.contabancaria.contabancaria.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.contabancaria.contabancaria.model.Cliente;

public class UserDetailsImpl implements UserDetails{

private static final long serialVersionUID =1L;
	
	private String userLogin;
	private String password;
	
	private List<GrantedAuthority> authorities;
	
	public UserDetailsImpl (Cliente user){
		this.userLogin = user.getCpf(); /* Utilizando CPF como login */
		this.password = user.getSenha();
	}
	
	public UserDetailsImpl (){ }
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
	
		return authorities;
	}

	@Override
	public String getPassword() {
	
		return password;
	}

	@Override
	public String getUsername() {
		
		return userLogin;
	}

	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}

    @Override
	public boolean isEnabled() {
		
		return true;
	}

}
