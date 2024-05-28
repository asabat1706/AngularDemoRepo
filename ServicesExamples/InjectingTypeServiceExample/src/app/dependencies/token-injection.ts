import { InjectionToken } from "@angular/core";
import { LogService1 } from "../log-service1.service";

export const LOG_MSG_TOKEN = new InjectionToken<LogService1>('welcome message');