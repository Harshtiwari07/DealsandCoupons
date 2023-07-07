package security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.dealsapp.catalogue_mcs.entity.Coupons;

import security.pojo.Coupons;
import security.proxy.AdminProxy;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	AdminProxy admin;
	
	
	
	@PostMapping("/add")
	@PreAuthorize("hasRole('ADMIN')")
	public String addCoupon(@RequestBody Coupons deal) {
		 
		return admin.addCoupon(deal);
	}

	/**
	 * To get catalog according to id
	 */
	@GetMapping("/find/id/{couponId}")
	@PreAuthorize("hasRole('ADMIN')")
	public Optional<Coupons> searchCouponByCouponId(@PathVariable("couponId") String couponId) {
		Optional<Coupons> coupons = admin.searchCouponByCouponId(couponId);
		return coupons;
	}
	
	/**
	 * To get catalog according to category

	 */
	@GetMapping("/find/category/{category}")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Optional<Coupons>> searchCouponByCategory(@PathVariable("category") String category) {
		List<Optional<Coupons>> coupons = admin.searchCouponByCategory(category);
		return coupons;
	}
	
	/**
	 * To get catalog according to company name
	 */
	@GetMapping("/find/companyName/{companyName}")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Optional<Coupons>> searchCouponByCompanyName(@PathVariable("companyName") String companyName) {
		List<Optional<Coupons>> coupons = admin.searchCouponByCompanyName(companyName);
		return coupons;
	}

	/**
	 * This will delete the coupons according to the provided id
	 */
	@DeleteMapping("/delete/id/{couponId}")
	@PreAuthorize("hasRole('ADMIN')")
	public String deleteCouponBycouponId(@PathVariable("couponId") String couponId) {
		String result = admin.deleteCouponBycouponId(couponId);
		return result;
	}
	
	/**
	 * This will delete the coupons according to the provided category
	 */
	@DeleteMapping("/delete/category/{category}")
	@PreAuthorize("hasRole('ADMIN')")
	public String deleteCouponByCategory(@PathVariable("category") String category) {
		String result = admin.deleteCouponByCategory(category);
		return result;
	}
	
	/**
	 * This will delete the coupons according to the provided company name.
	 */
	@DeleteMapping("/delete/companyName/{companyName}")
	@PreAuthorize("hasRole('ADMIN')")
	public String deleteCouponByCompanyName(@PathVariable("companyName") String companyName) {
		String result = admin.deleteCouponByCompanyName(companyName);
		return result;
	}

	/**
	 * This will show all the coupons in the catalog
	 */
	@GetMapping("/findall")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Coupons> fetchAllProducts(){
		return  admin.fetchAllProducts();
	}

	/**
	 * This will update the Deals details according to id
	 */
	
	@PutMapping("/update/id/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Coupons updateCoupon(@RequestBody Coupons deal) {
		return admin.updateCoupon(deal);
	}
	

}
