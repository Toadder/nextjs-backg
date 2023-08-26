import { Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';

const FooterMapInner: FC = () => {
	return (
		<>
			<Map
				instanceRef={(ref) => {
					ref && ref.behaviors.disable('scrollZoom');
				}}
				defaultState={{
					center: [55.688583, 37.433139],
					zoom: 18,
					controls: ['zoomControl', 'fullscreenControl']
				}}
				modules={['control.ZoomControl', 'control.FullscreenControl']}
				style={{
					width: '100%',
					height: '100%'
				}}
			>
				<Placemark
					modules={['geoObject.addon.balloon']}
					defaultGeometry={[55.688583, 37.433139]}
					properties={{
						balloonContentBody: 'г. Москва, ул. Генерала Дорохова, 28А'
					}}
					options={{
						iconColor: '#f9be07'
					}}
				/>
			</Map>
		</>
	);
};

export default FooterMapInner;
