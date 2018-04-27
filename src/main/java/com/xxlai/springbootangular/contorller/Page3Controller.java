package com.xxlai.springbootangular.contorller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xxlai.springbootangular.domain.User;
import com.xxlai.springbootangular.response.CommonResponse;

@RestController
@RequestMapping("page1")
public class Page3Controller {
	private static final Logger logger = LoggerFactory.getLogger(Page3Controller.class);
	
	@RequestMapping(value="query",method=RequestMethod.GET)
	public CommonResponse testResp(){
		try{
            return CommonResponse.getSuccessCommonResponse(new User("01","user01",18));
        } catch (Exception ex){
            logger.error("异常信息 : {} - 异常原因 : {} ", ex.getMessage(), ex.getCause());
            throw CommonResponse.getErrorCommonResponse(ex);
        }
	}
}
