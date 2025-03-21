import { Injectable, TemplateRef } from '@angular/core';

export interface Toast {
	textOrTpl: string | TemplateRef<any>;
	header?: string;
	classname?: string;
	delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: Toast[] = [];

	show(textOrTpl: string | TemplateRef<any>, options: Partial<Toast> = {}) {
		this.toasts.push({ textOrTpl, header: options.header || '', ...options });
	}

	remove(toast: Toast) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
