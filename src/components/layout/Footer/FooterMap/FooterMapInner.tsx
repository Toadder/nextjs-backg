import { Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';

import { IFooterMap } from '../footer.interface';

const FooterMapInner: FC<IFooterMap> = ({ address, coordinates }) => {
	if (!coordinates?.length) return;

	const coordinatesArray: number[] = coordinates
		.replaceAll(' ', '')
		.split(',')
		.map((item) => Number(item));

	return (
		<>
			<Map
				instanceRef={(ref) => {
					ref && ref.behaviors.disable('scrollZoom');
				}}
				defaultState={{
					center: coordinatesArray,
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
					defaultGeometry={coordinatesArray}
					properties={{
						balloonContentBody: address
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
