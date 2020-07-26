import SettingsModal from 'flarum/components/SettingsModal';

export default class MoneySettingsModal extends SettingsModal {
	className() {
		return 'Modal--small';
	}

	title() {
		return app.translator.trans('antoinefr-money.admin.settings.title');
	}

	form() {
		return [
			<div className='Form-group'>
				<label for='antoinefr-money.moneyname'>
					{app.translator.trans('antoinefr-money.admin.settings.moneyname')}
				</label>
				<input
					required
					className='FormControl'
					type='text'
					id='antoinefr-money.moneyname'
					bidi={this.setting('antoinefr-money.moneyname')}
				></input>
				<label for='antoinefr-money.moneyicon'>
					{app.translator.trans('antoinefr-money.admin.settings.moneyicon')}
				</label>
				<input
					required
					className='FormControl'
					type='text'
					id='antoinefr-money.moneyicon'
					bidi={this.setting('antoinefr-money.moneyicon')}
				></input>
				<label for='antoinefr-money.moneyforpost'>
					{app.translator.trans('antoinefr-money.admin.settings.moneyforpost')}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.moneyforpost'
					step='any'
					bidi={this.setting('antoinefr-money.moneyforpost')}
				></input>
				<label for='antoinefr-money.moneyfordiscussion'>
					{app.translator.trans(
						'antoinefr-money.admin.settings.moneyfordiscussion'
					)}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.moneyfordiscussion'
					step='any'
					bidi={this.setting('antoinefr-money.moneyfordiscussion')}
				></input>
				<label for='antoinefr-money.moneyfordeal'>
					{app.translator.trans('antoinefr-money.admin.settings.moneyfordeal')}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.moneyfordeal'
					step='any'
					bidi={this.setting('antoinefr-money.moneyfordeal')}
				></input>
				<label for='antoinefr-money.moneyforvfmdeal'>
					{app.translator.trans(
						'antoinefr-money.admin.settings.moneyforvfmdeal'
					)}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.moneyforvfmdeal'
					step='any'
					bidi={this.setting('antoinefr-money.moneyforvfmdeal')}
				></input>
				<label for='antoinefr-money.moneyforsuperdeal'>
					{app.translator.trans(
						'antoinefr-money.admin.settings.moneyforsuperdeal'
					)}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.moneyforsuperdeal'
					step='any'
					bidi={this.setting('antoinefr-money.moneyforsuperdeal')}
				></input>
				<label for='antoinefr-money.postminimumlength'>
					{app.translator.trans(
						'antoinefr-money.admin.settings.postminimumlength'
					)}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.postminimumlength'
					step='any'
					bidi={this.setting('antoinefr-money.postminimumlength')}
				></input>
				<label for='antoinefr-money.onsignup'>
					{app.translator.trans('antoinefr-money.admin.settings.onsignup')}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.onsignup'
					step='any'
					bidi={this.setting('antoinefr-money.onsignup')}
				></input>
				<label for='antoinefr-money.onreferral'>
					{app.translator.trans('antoinefr-money.admin.settings.onreferral')}
				</label>
				<input
					required
					className='FormControl'
					type='number'
					id='antoinefr-money.onreferral'
					step='any'
					bidi={this.setting('antoinefr-money.onreferral')}
				></input>
				<label for='antoinefr-money.noshowzero'>
					{app.translator.trans('antoinefr-money.admin.settings.noshowzero')}
				</label>
				<input
					type='checkbox'
					step='any'
					id='antoinefr-money.noshowzero'
					bidi={this.setting('antoinefr-money.noshowzero')}
				></input>
			</div>,
		];
	}
}
