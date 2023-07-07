package security.proxy;

import java.util.List;
import java.util.Optional;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import security.pojo.Coupons;
//@LoadBalancerClient(name = "Admin-Service",configuration=LoadBalancerConfiguration.class)
@FeignClient(value = "catalogue", url = "http://localhost:8083/catalogue")
public interface AdminProxy {
	
	@PostMapping("/add")
	public String addCoupon(@RequestBody Coupons deal) ;
	/**
	 * To get catalog according to id
	 */
	@GetMapping("/find/id/{couponId}")
	public Optional<Coupons> searchCouponByCouponId(@PathVariable("couponId") String couponId) ;
	
	/**
	 * To get catalog according to category

	 */
	@GetMapping("/find/category/{category}")
	public List<Optional<Coupons>> searchCouponByCategory(@PathVariable("category") String category) ;
	
	/**
	 * To get catalog according to company name
	 */
	@GetMapping("/find/companyName/{companyName}")
	public List<Optional<Coupons>> searchCouponByCompanyName(@PathVariable("companyName") String companyName) ;
	

	/**
	 * This will delete the coupons according to the provided id
	 */
	@DeleteMapping("/delete/id/{couponId}")
	public String deleteCouponBycouponId(@PathVariable("couponId") String couponId) ;
	
	/**
	 * This will delete the coupons according to the provided category
	 */
	@DeleteMapping("/delete/category/{category}")
	public String deleteCouponByCategory(@PathVariable("category") String category) ;
	
	/**
	 * This will delete the coupons according to the provided company name.
	 */
	@DeleteMapping("/delete/companyName/{companyName}")
	public String deleteCouponByCompanyName(@PathVariable("companyName") String companyName);

	/**
	 * This will show all the coupons in the catalog
	 */
	@GetMapping("/findall")
	public List<Coupons> fetchAllProducts();

	/**
	 * This will update the Deals details according to id
	 */
	
	@PutMapping("/update/id/{id}")
	public Coupons updateCoupon(@RequestBody Coupons deal);
	
}
