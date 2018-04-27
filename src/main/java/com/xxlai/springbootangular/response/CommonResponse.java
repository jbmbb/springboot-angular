package com.xxlai.springbootangular.response;

import java.io.Serializable;

import com.xxlai.springbootangular.exception.MyException;

public class CommonResponse implements Serializable {
	private static final long serialVersionUID = 7980325592134636957L;

	private static final boolean DEFAULT_SUCCESS_FLAG = true;

	private boolean success;
	private Object data;
	private MyException exception;
	
	@Deprecated
    public static CommonResponse getCommonResponse(boolean success,Object data){
        return new CommonResponse(success,data);
    }

    public static CommonResponse getSuccessCommonResponse(Object data){
        return new CommonResponse(true,data);
    }

	public static MyException getErrorCommonResponse(Throwable error) {
		if (error instanceof MyException) {
			return (MyException) error;
		}  else {
			return (MyException) new Exception(error);
		}
	}

	public static MyException getErrorCommonResponse(String code, String message) {
		return new MyException(code, message);
	}

	public CommonResponse(boolean success, Object data) {
		super();
		this.success = success;
		this.data = data;
	}

	/**
	 * @return the success
	 */
	public boolean isSuccess() {
		return success;
	}

	/**
	 * @param success
	 *            the success to set
	 */
	public void setSuccess(boolean success) {
		this.success = success;
	}

	/**
	 * @return the data
	 */
	public Object getData() {
		return data;
	}

	/**
	 * @param data
	 *            the data to set
	 */
	public void setData(Object data) {
		this.data = data;
	}

	/**
	 * @return the exception
	 */
	public MyException getException() {
		return exception;
	}

	/**
	 * @param exception
	 *            the exception to set
	 */
	public void setException(MyException exception) {
		this.exception = exception;
	}

}
