package com.dealsapp.catalogue_mcs.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.dao.DuplicateKeyException;


@ControllerAdvice
public class ApiExceptionHandler {

	@ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<String> handleDuplicateKeyException(DuplicateKeyException ex) {
        String errorMessage = "Duplicate key error: " + ex.getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorMessage);
    }

	@ExceptionHandler(value= {ApiRequestException.class})
	public ResponseEntity<Object> handleApiRequestException(ApiRequestException e){
		
		HttpStatus badRequest=HttpStatus.BAD_REQUEST;
		ApiException apiException=new ApiException (
				e.getMessage(),
				badRequest
				);
		return new ResponseEntity<>(apiException,badRequest);
	}

	@ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        String errorMessage = "Internal server error";
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
    }

}