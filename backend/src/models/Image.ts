import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Orphanage from './Orphanage'

@Entity('images') 
 //Indica que a classe está relacionada com a tabela de orfanatos no BD
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images )
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage


}